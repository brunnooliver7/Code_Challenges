/**
 * @param {string} text
 */

const isPaired = (text) => {
  // const regex1 = /[\[]+[\]]/;
  // const regex2 = /[\{]+[\}]/;
  // const regex3 = /[\(]+[\)]/;

  // if (!text.match(regex1) || !text.match(regex2) || !text.match(regex3)) {
  //   console.log('entrei no if', )
  //   console.log(text.match(regex1))
  //   // console.log(text.match(regex2))
  //   // console.log(text.match(regex3))
  //   return false;
  // }

  let res = true;

  const regex1 = /.*\]/;
  const regex2 = /.*\}/;
  const regex3 = /.*\)/;

  text.split("").forEach((c, i) => {
    if (c === "[") {
      const subText = text.substring(i, text.length);
      if (
        subText.match(regex2) ||
        subText.match(regex3) ||
        !subText.match(/\w*\]/)
      ) {
        res = false;
      }
    }
  });

  text.split("").forEach((c, i) => {
    if (c === "{") {
      const subText = text.substring(i, text.length);
      if (subText.match(regex1) || subText.match(regex3)) {
        res = false;
      }
    }
  });

  text.split("").forEach((c, i) => {
    if (c === "(") {
      const subText = text.substring(i, text.length);
      if (subText.match(regex1) || subText.match(regex2)) {
        res = false;
      }
    }
  });

  return res;
};

// usar recursão para adentrar as camadas
// enquanto houver abertura de camada, chamar a funcao novamente
// encontrar o fechamento das chaves, remover a abertura e o fechamento e chamar a funcao novamente com a substring
/**
 * @param {string} text
 */
function treatLayer(text, response) {
  const indexOpen = Math.min(text.includes('[') ? text.indexOf('['), text.indexOf('{'), text.indexOf('('))
  const indexClose = Math.max(text.lastIndexOf(']'), text.lastIndexOf('}'), text.lastIndexOf(')'))
  if (
    text.charAt(indexClose) === '[' && text.charAt(indexOpen) !== ']' ||
    text.charAt(indexClose) === '{' && text.charAt(indexOpen) !== '}' ||
    text.charAt(indexClose) === '(' && text.charAt(indexOpen) !== ')' 
  ) response = false;

  let newText = text;
  newText = newText.substring(indexOpen + 1)
  newText = newText.substring(0, indexClose - 1)

  console.log(newText)


  while (newText.match(/.*(\[ |\{ |\( )/)) {
    response = treatLayer(newText);
  }

  return response
}

// console.log(isPaired("[[]"));
// console.log(isPaired("[][]"));
// console.log(isPaired("[[]][]"));

console.log(treatLayer('[fdas[]fasfasdfad]', true))