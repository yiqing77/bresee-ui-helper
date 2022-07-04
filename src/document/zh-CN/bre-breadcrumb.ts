import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'max-count',
    description: '最多展示的面包屑数量（0表示不限制）',
    type: 'number',
    value: '—',
    default: "0"
  }
]

export const slots: DocumentSlot[] = [{ name: 'separator', description: '分隔符' }]

export const document: ElDocument = { attributes, slots }

export default document
