export const createElement = (type, props = {}, ...children) => {
  const flatChildren = children.flat();

  const filteredChildren = flatChildren
    .filter((child) => child !== null && child !== undefined && child !== false)
    .map((child) =>
      typeof child === "object" ? child : createTextElement(child)
    );

  if (type === undefined || type === "FRAGMENT") {
    return {
      type: "FRAGMENT",
      props: {
        children: filteredChildren,
      },
    };
  }

  if (typeof type === "function") {
    return type({
      ...props,
      children: filteredChildren,
    });
  }

  return {
    type,
    props: {
      ...props,
      children: filteredChildren,
    },
  };
};

const createTextElement = (text) => {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    },
  };
};
