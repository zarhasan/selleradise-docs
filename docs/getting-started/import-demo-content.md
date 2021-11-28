---
sidebar_position: 45
---

# Import Demo Content

After extracting the **selleradise-full.zip**. You will get **selleradise-demo-data.zip** which needs to be extracted as well. Once done you should have files with following structure.

```
├── cosmetics
│   ├── elementor-template.json
│   └── products.csv
├── fashion
│   ├── elementor-template.json
│   └── products.csv
├── furniture
│   ├── elementor-template.json
│   └── products.csv
├── posts
│   ├── faqs.xml
│   ├── media.xml
│   ├── posts.xml
│   └── testimonials.xml
├── posts-testimonials-faqs.xml
```

## 1. Import Products

To import demo you will need **products.csv**. Once you have the file, go to **Tools > Import** and locate **WooCommerce products (CSV)**. Then click on **Run Importer**.

![Run importer](/img/getting-started/import-demo-data/run-importer.png)

Then choose the file. And click on **Continue**.

![Choose csv file](/img/getting-started/import-demo-data/products-choose.png)

In the next tab you don't have to change anything, all the fields should auto-map. Just click on **Run Importer**.

![Click on run importer](/img/getting-started/import-demo-data/run-importer-final.png)

Then importer will run for a few minutes and all the products should be imported.

![Running importer](/img/getting-started/import-demo-data/running-woo-importer.png)

![](/img/getting-started/import-demo-data/complete-woo-importer.png)

## 2. Import Posts, Testimonial and FAQs

To import demo posts, you will need **posts-testimonials-faqs.xml**. Once you have the file go to **Tools > Import** and locate **WordPress**. And click on **Run Importer**.

![](/img/getting-started/import-demo-data/posts-find-importer.png)

Then choose the file mentioned above and click on **Upload file and import**.

![](/img/getting-started/import-demo-data/posts-upload-file.png)

Then select the author and make sure **Download and import file attachments** is checked. Finally click on **Submit**.

![](/img/getting-started/import-demo-data/posts-select-author.png)

After that all the content should be imported.
