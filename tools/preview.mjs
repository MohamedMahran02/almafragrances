// Local visual fixture only. Shopify is authoritative for commerce, editor and localization behavior.
import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { Liquid } from 'liquidjs';
const root = process.cwd();
const preview = path.join(root, '.preview/liquid');
const buildOnly = process.argv.includes('--build');
const previewOrigin = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:9293';
fs.mkdirSync(preview, {recursive:true});
const read = p => fs.readFileSync(p, 'utf8');
const json = p => JSON.parse(read(p));
const clean = text => text
  .replace(/{{\s*([\w.]+)\.(red|green|blue)\s*}}/g, "{{ $1 | color_extract: '$2' }}")
  .replace(/{%-?\s*schema\s*-?%}[\s\S]*?{%-?\s*endschema\s*-?%}/g, '')
  .replace(/{%-?\s*style\s*-?%}/g, '<style>').replace(/{%-?\s*endstyle\s*-?%}/g, '</style>')
  .replace(/{%-?\s*javascript\s*-?%}/g, '<script>').replace(/{%-?\s*endjavascript\s*-?%}/g, '</script>')
  .replace(/{%-?\s*form\s+([^%]*)%}/g, (_, args) => {
    const attributes = [...args.matchAll(/(id|class):\s*'([^']+)'/g)].map(([,key,value])=>`${key}="${value}"`).join(' ');
    return `<form action="/preview-form" method="get" ${attributes}>`;
  }).replace(/{%-?\s*endform\s*-?%}/g, '</form>')
  .replace(/{%-?\s*sections 'header-group'\s*-?%}/g, '{{ preview_header }}')
  .replace(/{%-?\s*sections 'footer-group'\s*-?%}/g, '{{ preview_footer }}');
for(const dir of ['snippets','sections','layout']) for(const file of fs.readdirSync(dir).filter(x=>x.endsWith('.liquid'))) fs.writeFileSync(path.join(preview,file),clean(read(`${dir}/${file}`)));
const engine = new Liquid({root:preview, extname:'.liquid', strictFilters:false});
const translations=json('locales/en.default.json');
engine.registerFilter('t', (key, ...args) => {
  let text=key.split('.').reduce((obj,k)=>obj?.[k],translations) ?? key;
  if(typeof text!=='string') text=text.one ?? key;
  for(const [k,v] of args.filter(Array.isArray)) text=text.replaceAll(`{{ ${k} }}`,v);
  return text;
});
engine.registerFilter('asset_url', name=>`/assets/${name}`);
engine.registerFilter('inline_asset_content',name=>read(`assets/${name}`));
engine.registerFilter('stylesheet_tag',url=>`<link rel="stylesheet" href="${url}">`);
engine.registerFilter('image_url',image=>image?.src ?? image);
engine.registerFilter('image_tag', (url,...args)=>`<img src="${url}" ${args.filter(Array.isArray).filter(([k])=>!['widths','sizes','preload'].includes(k)).map(([k,v])=>`${k}="${String(v).replaceAll('"','&quot;')}"`).join(' ')}>`);
engine.registerFilter('money',p=>`AED ${(Number(p)/100).toFixed(2)}`);
engine.registerFilter('money_with_currency',p=>`AED ${(Number(p)/100).toFixed(2)}`);
engine.registerFilter('font_face',()=> '');
engine.registerFilter('font_modify',f=>f);
engine.registerFilter('font_url',()=> '');
engine.registerFilter('color_extract', (color, channel)=>parseInt(color.slice({red:1,green:3,blue:5}[channel],{red:3,green:5,blue:7}[channel]),16));
engine.registerFilter('color_brightness',()=>240);
engine.registerFilter('color_lighten',x=>x);
engine.registerFilter('color_darken',x=>x);
engine.registerFilter('color_to_rgb',x=>x);
engine.registerFilter('payment_type_svg_tag',()=> '');
const data=json('config/settings_data.json');
const settings=data.current;
settings.color_schemes=Object.entries(settings.color_schemes).map(([id,value])=>({id,...value}));
const font={family:'Arial',fallback_families:'sans-serif',weight:400,style:'normal',system:true};
settings.type_header_font=font; settings.type_body_font=font;
const source=json('research/storefront/products.json').products;
const products=Object.fromEntries(source.map(p=>[p.handle,{...p,url:`/products/${p.handle}`,type:p.product_type,description:p.body_html,price:Math.min(...p.variants.map(v=>Number(v.price)*100)),compare_at_price:Number(p.variants[0].compare_at_price)*100,available:p.variants.some(v=>v.available),featured_image:p.images[0],price_varies:new Set(p.variants.map(v=>v.price)).size>1}]));
const collections={all:{url:'/collections/all',products:Object.values(products)}};
const mappings={
 'best-sellers':['alma-hair-and-body-perfume','lolo-vanilla'],
 'alma-perfumes':['alma-hair-and-body-perfume','luma-perfume','alma-oud-intense-perfume','lolo-vanilla-perfume','alma-leather-luxe-perfume','almaxeman'],
 'alma-solids-مخمريات':['alma-leather','alma-arabia','alma-sandalwood','alma-oud','lolo-vanilla','alma-refill-pouches','alma-box-of-minis','alma-vanilla-bloom','almaxeman'],
 'alma-lotions':['alma-arabia-hand-and-body-lotion','alma-mini-hand-and-body-lotion'],
 'alma-dokhon':['alma-dokhon'],
 'alma-solid-charms':['alma-charm-collection'],
 'layering-kits':['alma-layering-box','luma-summer-kit']
};
for(const [handle,handles] of Object.entries(mappings)) collections[handle]={url:`/collections/${handle}`,products:handles.map(h=>products[h]).filter(Boolean)};
const makeSection=(id,section,empty=false)=>{
 const settings=structuredClone(section.settings??{});
 if(settings.collection) settings.collection=empty?null:collections[settings.collection];
 if(settings.product) settings.product=empty?null:products[settings.product];
 const blocks=(section.block_order??[]).map(blockId=>{
  const b=structuredClone(section.blocks[blockId]);
  if(b.settings.collection) b.settings.collection=empty?null:collections[b.settings.collection];
  if(b.settings.product) b.settings.product=empty?null:products[b.settings.product];
  if(b.settings.products) b.settings.products=empty?[]:b.settings.products.map(h=>products[h]).filter(Boolean);
  return {id:blockId,...b};
 });
 return {id,...section,settings,blocks};
};
const routes={root_url:'/',all_products_collection_url:'/collections/all',cart_url:'/cart',cart_add_url:'/cart/add',cart_change_url:'/cart/change',cart_update_url:'/cart/update',predictive_search_url:'/search/suggest',search_url:'/search',account_login_url:'/account/login',account_url:'/account'};
const base={settings,collections,all_products:products,routes,request:{page_type:'index',path:'/',locale:{iso_code:'en'}},shop:{name:'ALMA by Reem Fragrances',url:previewOrigin,customer_accounts_enabled:true,enabled_payment_types:[],policies:[]},cart:{item_count:0,items:[]},localization:{available_countries:[],available_languages:[],country:{iso_code:'AE',currency:{iso_code:'AED'}},language:{iso_code:'en'}},linklists:{},page_title:'ALMA by Reem Fragrances',canonical_url:previewOrigin,powered_by_link:'',form:{},content_for_header:''};
async function render(empty) {
 const context={...base,collections:empty?{all:{products:[]}}:collections};
 engine.options.globals=context;
 const renderGroup=async file=>{
  const group=json(file); let html='';
  for(const id of group.order) {
   const section=makeSection(id,group.sections[id],empty);
   if(section.type==='header') section.settings.menu={links:[]};
   html+=`<div id="shopify-section-${id}" class="shopify-section ${section.type==='header'?'section-header':''}">${await engine.renderFile(section.type,{...context,section})}</div>`;
  }
  return html;
 };
 context.preview_header=await renderGroup('sections/header-group.json');
 context.preview_footer=await renderGroup('sections/footer-group.json');
 context.content_for_layout=await renderGroup('templates/index.json');
 return (await engine.renderFile('theme',context)).replaceAll('shopify://collections/','/collections/').replace('<head>','<head><script>window.Shopify={designMode:false};</script>');
}
const mime={'.css':'text/css','.js':'text/javascript','.png':'image/png','.jpg':'image/jpeg','.svg':'image/svg+xml'};
if(buildOnly) {
 const output=path.join(root,'dist');
 if(fs.existsSync(output)) fs.rmSync(output,{recursive:true,force:true});
 fs.mkdirSync(output,{recursive:true});
 fs.writeFileSync(path.join(output,'index.html'),await render(true));
 fs.cpSync(path.join(root,'assets'),path.join(output,'assets'),{recursive:true});
 console.log(`Shareable visual preview built at ${output} without catalog fixtures. Shopify remains authoritative for commerce.`);
} else http.createServer(async(req,res)=>{
 try {
  const url=new URL(req.url,'http://localhost');
  if(url.pathname==='/') {res.setHeader('Content-Type','text/html');res.end(await render(url.searchParams.has('empty')));return;}
  if(url.pathname.startsWith('/assets/')) {
   const target=path.resolve(root,'.'+decodeURIComponent(url.pathname));
   if(!target.startsWith(path.join(root,'assets')+path.sep)){res.writeHead(403);res.end();return;}
   res.setHeader('Content-Type',mime[path.extname(target)]??'application/octet-stream');res.end(fs.readFileSync(target));return;
  }
  res.writeHead(404,{'Content-Type':'text/plain'});res.end('Local visual fixture only. Open the Shopify test theme to verify this store route.');
 } catch(e) {res.writeHead(500,{'Content-Type':'text/plain'});res.end(e.stack);console.error(e);}
}).listen(9293,'127.0.0.1',()=>console.log('Local Liquid visual fixture: http://127.0.0.1:9293 — ?empty=1 tests empty catalog. Commerce requires Shopify.'));
