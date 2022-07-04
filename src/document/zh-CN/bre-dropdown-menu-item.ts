import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'value',
    description: '选项值',
    type: 'string/number/object',
    value: '—',
    default: '—'
  },
  {
    name: 'disabled',
    description: '是否禁用',
    type: 'boolean',
    value: '—',
    default: 'false'
  }
]

export const slots: DocumentSlot[] = [
  {
    name: 'icon',
    description: '图标'
  }
]

export const document: ElDocument = { attributes, slots }

export default document
