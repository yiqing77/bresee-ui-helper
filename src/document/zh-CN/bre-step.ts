import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'title',
    description: '步骤的标题',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'description',
    description: '步骤的描述信息',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'disabled',
    description: '是否禁用',
    type: 'boolean',
    value: '-',
    default: 'false'
  },
  {
    name: 'status',
    description: '设置当前步骤的状态，不设置则根据 steps 确定状态',
    type: 'wait / process / finish / error',
    value: '-',
    default: '-'
  }
]

export const slots: DocumentSlot[] = [
  { name: 'icon', description: '自定义图标' },
  { name: 'node', description: '节点' },
  { name: 'description', description: '自定义描述性文字' }
]

export const document: ElDocument = { attributes, slots }

export default document
