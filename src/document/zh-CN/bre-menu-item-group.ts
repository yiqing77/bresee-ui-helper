import { DocumentAttribute } from '@/document'
import { ElDocument } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'title',
    description: '菜单组的标题',
    type: 'string',
    value: '—',
    default: '—'
  }
]

export const slots: DocumentSlot[] = [
  { name: 'title', description: '标题' }
]

export const document: ElDocument = { attributes, slots }

export default document
