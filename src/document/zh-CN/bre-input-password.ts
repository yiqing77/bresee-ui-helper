import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'invisible-button',
    description: '是否显示可见按钮',
    type: 'boolean',
    value: '—',
    default: 'true'
  }
]

export const document: ElDocument = { attributes }

export default document
