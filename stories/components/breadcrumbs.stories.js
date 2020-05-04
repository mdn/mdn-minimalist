import "../../sass/components/breadcrumbs.scss";

export default {
  title: "Components|Breadcrumbs",
};

export const Breadcrumbs = () =>
  '<nav class="breadcrumbs" role="navigation"><ol typeof="BreadcrumbList" vocab="https://schema.org/" aria-label="breadcrumbs"><li property="itemListElement" typeof="ListItem"><a href="/en-US/docs/Web" class="breadcrumb-chevron" property="item" typeof="WebPage"><span class="pre-text">See<!-- --> </span><span property="name">Web technology for developers</span></a><meta property="position" content="1"/></li><li property="itemListElement" typeof="ListItem"><a href="/en-US/docs/Web/HTML" class="breadcrumb-chevron" property="item" typeof="WebPage"><span class="pre-text">See<!-- --> </span><span property="name">HTML: Hypertext Markup Language</span></a><meta property="position" content="2"/></li><li property="itemListElement" typeof="ListItem"><a href="/en-US/docs/Web/HTML/Element" class="breadcrumb-previous" property="item" typeof="WebPage"><span class="pre-text">See<!-- --> </span><span property="name">HTML elements reference</span></a><meta property="position" content="3"/></li><li property="itemListElement" typeof="ListItem"><a href="/en-US/docs/Web/HTML/Element/article" class="crumb-current-page" property="item" typeof="WebPage"><span property="name" aria-current="page">&lt;article&gt;: The Article Contents element</span></a><meta property="position" content="4"/></li></ol></nav';
