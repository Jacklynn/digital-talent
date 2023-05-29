---
title: Markdoc Documentation
description: Markdoc Documentation written in Markdoc
navigation: true
---

[Markdoc](https://markdoc.dev/) is a superset of Markdown, combining the constraints of Markdown with additional syntax to embed dynamic content.  Markdoc was created by [Stripe](https://stripe.com/) to power their documentation.

# Basic Syntax {% #basic-syntax %}

The basic syntax is similar to what is available in Markdown.

---
## Headings {% #basic-syntax-headings %}

# Level 1 Header
## Level 2 Header
### Level 3 Header
#### Level 4 Header
##### Level 5 Header
###### Level 6 Header

---

## Paragraphs {% #basic-syntax-paragraphs %}

To create paragraphs, use a blank line to separate one or more lines of text.

I really like using Markdown.

I think I'll use it to format all of my documents from now on.

---

## Emphasis {% #basic-syntax-emphasis %}

You can add emphasis by making text _italic_, __bold__, or ___both at the same time___.

---

## Blockquotes {% #basic-syntax-blockquotes %}

You can write blockquotes.

> Lorem ipsum dolor sit amet, consectetur adipiscing elit.

---

## Lists {% #basic-syntax-lists %}

You can organize items into ordered and unordered lists.


### Ordered Lists {% #basic-syntax-lists-ordered %}

1. First Item
2. Second Item
3. Third Item
4. Fourth Item

### Unordered Lists {% #basic-syntax-lists-unordered %}

- First Item
- Second Item
- Third Item
- Fourth Item

### Adding Elements in Lists {% #basic-syntax-lists-adding-elements %}

#### Paragraphs
* This is the first list item.
* Here's the second list item.

    I need to add another paragraph below the second list item.

* And here's the third list item.

#### Blockquotes
* This is the first list item.
* Here's the second list item.

    > A blockquote would look great below the second list item.

* And here's the third list item.

---

## Code {% #basic-syntax-code %}

To denote a word or phrase as code, enclose it in backticks(`).

This is how you write a line break in HTML: `<br />`

---

## Code Blocks {% #basic-syntax-code-blocks %}

To create code blocks, surround code with triple backticks (```).

```
<html>
    <head>
        <title>Hello, world!</head>
    </head>
</html>
```

---

## Horizontal Rules {% #basic-syntax-horizontal-rules %}

To create a horizontal rule, use three or more asterisks (***) or dashes (---) on a line by themselves.

---

## Links {% #basic-syntax-links %}

To create a link, enclose the link text in brackets (e.g., [Duck Duck Go]) and then follow it immediately with the URL in parentheses (e.g., (https://duckduckgo.com)).

My favorite search engine is [Duck Duck Go](https://duckduckgo.com).

### Advanced Links {% #basic-syntax-links-advanced %}

More advanced link formats can be found on the [Markdown Guide](https://www.markdownguide.org/basic-syntax/#links)

---

## Images {% #basic-syntax-images %}

To add an image, add an exclamation mark (!), followed by alt text in brackets, and the path or URL to the image asset in parentheses. You can optionally add a title in quotation marks after the path or URL.

![The San Juan Mountains are beautiful!](https://mdg.imgix.net/assets/images/san-juan-mountains.jpg?auto=format&fit=clip&q=40&w=1080 "San Juan Mountains")

### Linking Images {% #basic-syntax-images-linking %}

To add a link to an image, enclose the Markdown for the image in brackets, and then add the link in parentheses.

[![An old rock in the desert](https://mdg.imgix.net/assets/images/shiprock.jpg?auto=format&fit=clip&q=40&w=1080 "Shiprock, New Mexico by Beau Rogers")](https://www.flickr.com/photos/beaurogers/31833779864/in/photolist-Qv3rFw-34mt9F-a9Cmfy-5Ha3Zi-9msKdv-o3hgjr-hWpUte-4WMsJ1-KUQ8N-deshUb-vssBD-6CQci6-8AFCiD-zsJWT-nNfsgB-dPDwZJ-bn9JGn-5HtSXY-6CUhAL-a4UTXB-ugPum-KUPSo-fBLNm-6CUmpy-4WMsc9-8a7D3T-83KJev-6CQ2bK-nNusHJ-a78rQH-nw3NvT-7aq2qf-8wwBso-3nNceh-ugSKP-4mh4kh-bbeeqH-a7biME-q3PtTf-brFpgb-cg38zw-bXMZc-nJPELD-f58Lmo-bXMYG-bz8AAi-bxNtNT-bXMYi-bXMY6-bXMYv)

---

## Escaping Characters {% #basic-syntax-escaping-characters %}

See the [Markdown Guide](https://www.markdownguide.org/basic-syntax/#escaping-characters) for instructions on how to escape characters.

---

# Advanced Syntax {% #advanced-syntax %}

The syntax in the following section is Markdoc-specific, and in some cases, specific to this project.

## Frontmatter {% #advanced-syntax-frontmatter %}

Use [Frontmatter](https://markdoc.dev/docs/frontmatter) to apply page-level metadata to Markdoc documents, like `title` and `description`.

```
---
title: Markdoc Documentation
description: Markdoc Documentation written in Markdoc
navigation: true
---
```

__Description__:
- `title`: Used at the top of the page and for SEO
- `description`: Used for SEO
- `navigation`: Displays page navigation when set to `true`

Modify the Frontmatter at the top of this page to see how it works.

---

## Cards {% #advanced-syntax-cards %}

You can create a basic card to visually group related content

{% card %}
__Card__

Here is some related information
{% /card %}

---

## Icon Lists {% #advanced-syntax-icon-list %}

Currently, 2 types of Icon Lists are supported: default and text.

### Default Icon List {% #advanced-syntax-icon-list-default %}

#### Basic Icon List

{% icon-list %}

{% icon-list-item icon="CheckCircle2" text="Create a new position number" /%}

{% /icon-list %}

#### Customized Icon List

{% icon-list %}

{% icon-list-item icon="CheckCircle2" iconColor="text-green-500" text="Create a new position number" /%}
{% icon-list-item icon="Clock" iconColor="text-bcgov-blue" text="Commit to at least 3 consecutive days for panel interview time with minimal other appointments" /%}
{% icon-list-item icon="Verified" iconBgColor="bg-bcgov-gold-light" text="Be approved to hire" %}

- Approval from your [supervisor]
- Deputy minister designate to hire

{% /icon-list-item %}

{% /icon-list %}

> While i've mixed styles here, list styles should generally be consistent.

### Text Icon List {% #advanced-syntax-icon-list-text %}

The `Text Icon List` uses a number or text as the icon.  While the icon can technically be of any length, it only really supports `2` characters.

{% icon-list %}

{% icon-list-item icon="1" iconColor="text-white" iconBgColor="bg-bcgov-blue-dark" text="Lorem ipsum" %}

Lorem ipsum dolor sit amet, consectetur adipiscing elit.

- [See requirements]()

> Highlight some information

{% /icon-list-item %}

{% /icon-list %}

---

## Page Navigation {% #advanced-syntax-page-navigation %}

To use page navigation, your [frontmatter](#advanced-syntax-frontmatter) must be set up correctly.

```
---
...
navigation: true
---
```

Heading levels 1 - 3 are included in the page navigation if they have an `id`, as seen below:

``` {% process=false %}
# Level 1 Heading {% #level-1-heading %}
```

