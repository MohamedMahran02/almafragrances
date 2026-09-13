import fs from 'node:fs';

const catalog = JSON.parse(fs.readFileSync('research/storefront/products.json', 'utf8')).products;
const memberships = JSON.parse(fs.readFileSync('research/storefront/collection-memberships.json', 'utf8')).collections;
const membershipByProduct = new Map();

for (const collection of memberships) {
  for (const handle of collection.product_handles) {
    const current = membershipByProduct.get(handle) || [];
    current.push(collection);
    membershipByProduct.set(handle, current);
  }
}

const headers = [
  'Handle', 'Title', 'Body (HTML)', 'Vendor', 'Product Category', 'Type', 'Tags', 'Published', 'Option1 Name',
  'Option1 Value', 'Option2 Name', 'Option2 Value', 'Option3 Name', 'Option3 Value', 'Variant SKU', 'Variant Grams',
  'Variant Inventory Tracker', 'Variant Inventory Qty', 'Variant Inventory Policy', 'Variant Fulfillment Service',
  'Variant Price', 'Variant Compare At Price', 'Variant Requires Shipping', 'Variant Taxable', 'Variant Barcode',
  'Image Src', 'Image Position', 'Image Alt Text', 'Gift Card', 'SEO Title', 'SEO Description',
  'Google Shopping / Google Product Category', 'Google Shopping / Gender', 'Google Shopping / Age Group',
  'Google Shopping / MPN', 'Google Shopping / Condition', 'Google Shopping / Custom Product',
  'Google Shopping / Custom Label 0', 'Google Shopping / Custom Label 1', 'Google Shopping / Custom Label 2',
  'Google Shopping / Custom Label 3', 'Google Shopping / Custom Label 4', 'Variant Image', 'Variant Weight Unit',
  'Variant Tax Code', 'Cost per item', 'Status', 'Collection'
];

const categoryPriority = [
  'alma-solid-charms', 'alma-dokhon', 'alma-hands-and-body-lotions-collections', 'layering-kits',
  'alma-perfumes', 'alma-makhmaria-s-solid-perfume', 'start-here'
];

const categoryFallback = product => {
  const key = `${product.handle} ${product.title}`.toLowerCase();
  if (key.includes('charm')) return 'Alma solid charms';
  if (key.includes('dokhon') || key.includes('dukhon')) return 'Alma dokhon';
  if (key.includes('lotion')) return 'Alma lotions';
  if (key.includes('kit') || key.includes('layering') || key.includes('wardrobe')) return 'Layering & kits';
  if (key.includes('perfume')) return 'Alma perfumes';
  return '';
};

const stripHtml = html => String(html || '')
  .replace(/<script[\s\S]*?<\/script>/gi, ' ')
  .replace(/<style[\s\S]*?<\/style>/gi, ' ')
  .replace(/<[^>]+>/g, ' ')
  .replace(/&nbsp;/g, ' ')
  .replace(/&amp;/g, '&')
  .replace(/\s+/g, ' ')
  .trim();

const hasArabicText = value => /[\u0600-\u06ff\u0750-\u077f\u08a0-\u08ff\ufb50-\ufdff\ufe70-\ufeff]/.test(value);

const englishOnlyHtml = html => {
  const source = String(html || '');
  const blocks = [...source.matchAll(/<(p|ul|ol|div|h[1-6])\b[\s\S]*?<\/\1>/gi)].map(match => match[0]);
  if (blocks.length === 0) return hasArabicText(source) ? '' : source;
  return blocks.filter(block => !hasArabicText(stripHtml(block))).join('\n');
};

const escapeCsv = value => {
  const text = value == null ? '' : String(value);
  return /[",\r\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
};

const rows = [];
const importedProducts = catalog.filter(product => !/gift[- ]?card/i.test(`${product.handle} ${product.title}`));

for (const product of importedProducts) {
  const memberCollections = membershipByProduct.get(product.handle) || [];
  const primaryCollection = categoryPriority
    .map(handle => memberCollections.find(collection => collection.handle === handle))
    .find(Boolean);
  const collectionTitle = primaryCollection?.handle === 'alma-makhmaria-s-solid-perfume'
    ? 'Alma Solid Perfumes'
    : primaryCollection?.title || categoryFallback(product);
  const membershipTags = memberCollections.map(collection => `collection-${collection.handle}`);
  const tags = [...new Set([...(product.tags || []), ...membershipTags])].join(', ');
  const optionNames = product.options || [];
  const imageCount = product.images?.length || 0;
  const rowCount = Math.max(product.variants.length, imageCount, 1);
  const englishBodyHtml = englishOnlyHtml(product.body_html);

  for (let index = 0; index < rowCount; index += 1) {
    const variant = product.variants[index];
    const image = product.images?.[index];
    const first = index === 0;
    const values = {
      'Handle': product.handle,
      'Title': first ? product.title : '',
      'Body (HTML)': first ? englishBodyHtml : '',
      'Vendor': first ? (product.vendor || 'ALMA by Reem Fragrances') : '',
      'Product Category': first ? 'Health & Beauty > Personal Care > Cosmetics > Perfumes & Colognes' : '',
      'Type': first ? product.product_type : '',
      'Tags': first ? tags : '',
      'Published': first ? 'TRUE' : '',
      'Option1 Name': variant ? (optionNames[0]?.name || 'Title') : '',
      'Option1 Value': variant ? (variant.option1 || 'Default Title') : '',
      'Option2 Name': variant && optionNames[1] ? optionNames[1].name : '',
      'Option2 Value': variant ? variant.option2 : '',
      'Option3 Name': variant && optionNames[2] ? optionNames[2].name : '',
      'Option3 Value': variant ? variant.option3 : '',
      'Variant SKU': variant?.sku,
      'Variant Grams': variant?.grams ?? '',
      'Variant Inventory Tracker': variant && !variant.available ? 'shopify' : '',
      'Variant Inventory Qty': variant && !variant.available ? '0' : '',
      'Variant Inventory Policy': variant ? 'deny' : '',
      'Variant Fulfillment Service': variant ? 'manual' : '',
      'Variant Price': variant?.price,
      'Variant Compare At Price': variant?.compare_at_price,
      'Variant Requires Shipping': variant ? String(variant.requires_shipping).toUpperCase() : '',
      'Variant Taxable': variant ? String(variant.taxable).toUpperCase() : '',
      'Image Src': image?.src,
      'Image Position': image?.position,
      'Image Alt Text': image ? `${product.title} — image ${image.position || index + 1}` : '',
      'Gift Card': first ? 'FALSE' : '',
      'SEO Title': first ? product.title.slice(0, 70) : '',
      'SEO Description': first ? stripHtml(englishBodyHtml).slice(0, 320) : '',
      'Google Shopping / Condition': variant ? 'new' : '',
      'Google Shopping / Custom Product': variant ? 'TRUE' : '',
      'Variant Image': variant?.featured_image?.src || '',
      'Variant Weight Unit': variant ? 'g' : '',
      'Status': first ? 'active' : '',
      'Collection': first ? collectionTitle : ''
    };
    rows.push(headers.map(header => escapeCsv(values[header])).join(','));
  }
}

const output = [headers.join(','), ...rows].join('\n') + '\n';
fs.writeFileSync('research/storefront/shopify-products-import.csv', output, 'utf8');
console.log(JSON.stringify({products: importedProducts.length, variants: importedProducts.reduce((sum, product) => sum + product.variants.length, 0), rows: rows.length, bytes: Buffer.byteLength(output), excluded: catalog.length - importedProducts.length}, null, 2));
