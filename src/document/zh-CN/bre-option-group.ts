import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'label',
    description: '分组的组名',
    type: 'string',
    value: '—',
    default: '—'
  }
]

export const slots: DocumentSlot[] = [
  { name: 'label', description: '选项组的标题' }
]

export const document: ElDocument = { attributes, slots }

export default document
