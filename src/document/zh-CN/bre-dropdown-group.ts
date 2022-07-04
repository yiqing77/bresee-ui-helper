import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'title',
    description: '分组标题',
    type: 'string',
    value: '—',
    default: '—'
  }
]

export const slots: DocumentSlot[] = [
  {
    name: 'title',
    description: '分组标题'
  }
]

export const document: ElDocument = { attributes, slots }

export default document
