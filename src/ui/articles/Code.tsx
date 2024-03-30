import { Highlight, TokenOutputProps } from "prism-react-renderer";
import * as style from "./Code.css";

type PrismToken =
  | "comment"
  | "prolog"
  | "doctype"
  | "cdata"
  | "punctuation"
  | "property"
  | "tag"
  | "constant"
  | "symbol"
  | "deleted"
  | "number"
  | "boolean"
  | "selector"
  | "attr-name"
  | "string"
  | "char"
  | "builtin"
  | "inserted"
  | "operator"
  | "entity"
  | "url"
  | "variable"
  | "atrule"
  | "attr-value"
  | "function"
  | "class-name"
  | "maybe-class-name"
  | "keyword"
  | "regex"
  | "important"
  | "important"
  | "bold"
  | "italic"
  | "entity";

const prismClassToVanillaExtract = (prismClass: PrismToken): string =>
  (
    ({
      comment: style.comment,
      prolog: style.prolog,
      doctype: style.doctype,
      cdata: style.cdata,
      punctuation: style.punctuation,
      property: style.property,
      tag: style.tag,
      constant: style.constant,
      symbol: style.symbol,
      deleted: style.deleted,
      number: style.number,
      boolean: style.boolean,
      selector: style.selector,
      "attr-name": style.attrName,
      string: style.str,
      char: style.char,
      builtin: style.builtin,
      inserted: style.inserted,
      operator: style.operator,
      entity: style.entity,
      url: style.url,
      variable: style.variable,
      atrule: style.atrule,
      "attr-value": style.attrValue,
      function: style.fn,
      "class-name": style.className,
      "maybe-class-name": style.className,
      keyword: style.keyword,
      regex: style.regex,
      important: style.important,
      bold: style.bold,
      italic: style.italic,
    }) satisfies Record<PrismToken, string>
  )[prismClass];

const normalizePrismProps = (props: TokenOutputProps): TokenOutputProps => ({
  ...props,
  className: props.className
    .split(" ")
    .map((prismClass) => prismClassToVanillaExtract(prismClass as PrismToken))
    .join(" "),
  style: undefined,
});

type CodeProps = {
  children: string;
};

const Code = ({ children }: CodeProps) => {
  return (
    <Highlight code={children} language="tsx">
      {({ tokens, getLineProps, getTokenProps }) => (
        <pre className={style.code}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })} style={undefined}>
              {line.map((token, key) => (
                <span
                  key={key}
                  {...normalizePrismProps(getTokenProps({ token }))}
                />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default Code;
