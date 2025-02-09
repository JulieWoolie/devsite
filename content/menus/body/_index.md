---
title: "Body"
description: "Document `<body>` element"
type: docs
weight: 60
---

## Default Styling
```scss
:root {
  $body-bg: darken(white, 45%);

  background-color: $body-bg;
  min-width: 100vw;
  min-height: 100vh;
  max-width: 100vw;
  max-height: 100vh;

  outline: 1px;
  padding: 1.5px;
  outline-color: darken($body-bg);
}
```