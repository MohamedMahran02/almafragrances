# Public storefront snapshot

Captured 2026-09-11 from https://www.almafragrances.com/. Exact timestamp and requested source URLs are in `capture-summary.json`.

## Contents

- `products.json`: complete paginated public product-feed responses, preserving product IDs, titles, handles, description HTML, options, variants, exposed prices/SKUs/availability, image URLs, and other returned fields.
- `collections.json`: public collection definitions and descriptions.
- `collection-memberships.json`: product IDs and handles in each public collection.
- `product-pages.json`: all captured product pages' titles, canonical link tags, description/social meta tags, and embedded JSON-LD.
- `urls.json`: sitemap URLs for products, collections, pages, and blogs, for URL preservation planning.
- `capture-summary.json`: counts, provenance, capture timestamp, and scope.

## Coverage and checks

- 23 unique public products; 189 variants; 42 product image references.
- 11 public collections with memberships captured.
- 23 product pages captured for public SEO/structured data.
- All 23 product handles found in the sitemap are present in the product feed; zero missing sitemap products.
- 40 unique sitemap URLs captured overall.
- Product and collection pagination continued to an empty page. Raw source values were preserved; variant prices are not currency-converted.

This covers the public feed and product-page metadata at capture time, not every private Shopify field or unpublished product. Image URLs are recorded; remote image files were not downloaded. Reviews from third-party apps and private integration settings are not guaranteed by this capture. Customers and orders were not accessed. No products were imported into Shopify and no live store data was modified.

Treat this as design/rebuild reference, not a CSV import payload. On the existing store, reuse the existing product records and handles. Refresh time-sensitive prices and availability before implementation, and verify missing/admin-only information through authorized Shopify access. Preserve original URLs or explicitly plan redirects if a later approved change requires them.
