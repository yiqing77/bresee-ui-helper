import { DocumentSlot, ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'img-src',
    description: '自定义图片的地址',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'description',
    description: '描述内容',
    type: 'string',
    value: '—',
    default: '—'
  }
]

export const slots: DocumentSlot[] = [
  { name: 'image', description: '自定义图片/图标' }
]

export const document: ElDocument = { attributes, slots }

export default document
