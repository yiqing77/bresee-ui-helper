import { DocumentAttribute } from '@/document'
import { ElDocument } from '@/document'
import { DocumentSlot } from '@/document'

const attributes: DocumentAttribute[] = [
  {
    name: 'key',
    description: '唯一标志',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'disabled',
    description: '是否禁用',
    type: 'boolean',
    value: '—',
    default: false
  }
]

export const slots: DocumentSlot[] = [
  { name: 'icon', description: '菜单的图标' }
]

export const document: ElDocument = { attributes, slots }

export default document
