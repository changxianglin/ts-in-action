enum Type {Strong, Week}

class Java {
  helloJava() {
    console.log('Hello Java')
  }
}

class JavaScript {
  helloJavaScript() {
    console.log('Hello JavaScript')
  }
}

function getLanguage(type: Type) {
  let lang = type === Type.Strong ? new Java() : new JavaScript()
  return lang
}

getLanguage(Type.Strong)