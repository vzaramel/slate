import { ExtendedType, Text as BaseText } from 'slate'
// import { CustomExtensions, Text } from '../../slate'
declare module 'slate' {
  export interface CustomExtensions {
    Text: {
      placeholder: string
    }
  }
}

// export type Text = ExtendedType<'Text', BaseText>
