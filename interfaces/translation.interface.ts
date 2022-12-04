interface Translation{
  id: string,
  tag: string,
  valueLang: TranslationValue
}

export type TranslationValue = {
  es: string,
  en: string
}

export default Translation;