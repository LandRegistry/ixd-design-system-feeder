---
layout: page
title: Guide to adding a new page
---

## Adding a New Page to a GOV.UK Eleventy Plugin Site

This guide explains how to add a new page to a website built with the [GOV.UK Eleventy Plugin](https://govuk-eleventy-plugin.x-govuk.org) and hosted on GitHub.

It assumes you are comfortable using Git and GitHub, but are new to Eleventy and Markdown.

---

## How the Site Works

The website is made from **Markdown files** (`.md`).

Each Markdown file becomes a page on the website. When you push changes to GitHub, GitHub builds the site automatically and publishes the updated version.

Most content changes only involve editing or creating Markdown files.

---

## Step 1: Find the Content Folder

Open the project in your editor.

The content is stored in the folder:

```text
docs/
```

This is the default folder used by the GOV.UK Eleventy Plugin, although this source page folder can be configured so an eleventy project may use a different name. If you're unsure, look for the folder containing other `.md` files.

Ignore the folder:

```text
_site/
```

this is where the static html pages for the website are generated into

---

## Step 2: Create a New Markdown File

Create a new file in the appropriate folder.

For example:

```text
getting-started.md
```

The filename usually becomes part of the page's web address.

For example:

```text
getting-started.md
```

becomes

```text
https://example.gov.uk/getting-started/
```

---

## Step 3: Add Front Matter

Every page starts with a block of information called **front matter**.

For a standard content page:

```yaml
---
title: Getting started
layout: page
---
```

The two fields you'll use most often are:

| Field    | Purpose                                            |
| -------- | -------------------------------------------------- |
| `title`  | The page title shown in the browser and navigation |
| `layout` | Which page template to use                         |

The GOV.UK Eleventy Plugin includes several built-in layouts:

| Layout           | When to use                                              |
| ---------------- | -------------------------------------------------------- |
| `page`           | Standard content pages                                   |
| `sub-navigation` | Pages that belong in a section with left-hand navigation |
| `post`           | News or blog-style content                               |
| `collection`     | Lists of pages                                           |
| `product`        | Product or service landing pages                         |

For most documentation pages, use `layout: page`.

---

## Step 4: Write the Page

Below the front matter, write your content using Markdown.

Dont use an H1 (single #), the title in the front matter will be the page H1.  Start your header structure with H2 (double ##)

Example:

```markdown
## Getting started

Welcome to the service.

### Before you begin

Make sure you have access to your account.

### Next steps

Follow the instructions below.
```

Common Markdown:

| Markdown             | Result               |
| -------------------- | -------------------- |
| `## Heading`         | Section heading      |
| `**bold**`           | **Bold text**        |
| `*italic*`           | *Italic text*        |
| `- item`             | Bullet list          |
| `[Link](page-name/)` | Link to another page |

---

##  Step 5: Add the Page to the Navigation (if needed)

The GOV.UK Eleventy Plugin can automatically build site navigation from page metadata.

Your project may already have this configured.

If existing pages contain an `eleventyNavigation` section in the front matter, copy it from a similar page and update the values.

For example:

```yaml
---
title: Getting started
layout: page

eleventyNavigation:
  parent: User guide
  key: Getting started
---
```

If no other pages use `eleventyNavigation`, you probably don't need to add it. The plugin can generate navigation automatically in many cases.

---

## Step 6: Preview Your Changes

If you're running the site locally:

```bash
npx eleventy --serve
```

Open the address shown in the terminal (normally `http://localhost:8080`).

Whenever you save a file, the browser refreshes automatically.

---

## Step 7: Commit and Push

Once you're happy with the page:

```bash
git add .
git commit -m "Add Getting Started page"
git push
```

GitHub will automatically rebuild and publish the website.

---

## Editing an Existing Page

To update an existing page:

1. Open its `.md` file.
2. Edit the Markdown.
3. Save.
4. Commit and push.

No other changes are normally required.

---

## Tips

* The easiest way to create a new page is to copy an existing one.
* Keep filenames short and lowercase.
* Use `layout: page` unless you know another layout is more appropriate.
* Follow the same folder structure as similar content.
* If your site uses `eleventyNavigation`, copy it from an existing page rather than creating it from scratch.
* If GitHub reports a build failure, check the **Actions** tab to see the error message.

---

##  The Homepage

The site's homepage is slightly different from other pages.

Its front matter should include:

```yaml
---
homepage: true
layout: page
title: Home
---
```

The `homepage: true` setting tells the plugin which page is the root of the site and helps it build the navigation correctly.
