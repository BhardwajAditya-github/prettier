run_spec(
  {
    importMeta: import.meta,
    snippets: [
      ...[
        "area",
        "base",
        // "basefont",
        // "bgsound",
        "br",
        "col",
        "command",
        "embed",
        // "frame",
        "hr",
        // "image",
        "img",
        "input",
        // "isindex",
        "keygen",
        "link",
        // "menuitem",
        "meta",
        // "nextid",
        "param",
        "source",
        "track",
        "wbr",
      ].map((tag) => ({ name: tag, code: `<${tag}></${tag}>` })),
      ...[
        "div",
        // Missed HTML void tags
        "basefont",
        "bgsound",
        "frame",
        "image",
        "isindex",
        "menuitem",
        "nextid",
        // Upper case
        "IMG",
        "INPUT",
        "imG",
        "lINk",
      ].map((tag) => ({ name: tag, code: `<${tag}>` })),
    ],
  },
  ["glimmer"]
);
