enum Type { Strong, Week }

class Java {
  helloJava() {
    console.log('Hello Java')
  }
  java: any
}

class JavaScript {
  helloJavaScript() {
    console.log('Hello JavaScript')
  }
  javascript: any
}

function isJava(lang: Java | JavaScript): lang is Java {
  return (lang as Java).helloJava !== undefined
}

function getLanguage(type: Type, x: string | number) {
  let lang = type === Type.Strong ? new Java() : new JavaScript()

  if (isJava(lang)) {
    lang.helloJava()
  } else {
    lang.helloJavaScript()
  }
  // if ((lang as Java3).helloJava) {
  //   (lang as Java3).helloJava()
  // } else {
  //   (lang as JavaScript3).helloJavaScript()
  // }

  // instanceof
  // if (lang instanceof Java3) {
  //   lang.helloJava()
  // } else {
  //   lang.helloJavaScript()
  // }

  // in
  // if('java' in lang) {
  //   lang.hellJava()
  // } else {
  //   lang.javascript()
  // }

  // typeof 
  // if (typeof x === 'string') {
  //   x.length
  // } else {
  //   x.toFixed(2)
  // }

  return lang
}

getLanguage(Type.Strong, '33')