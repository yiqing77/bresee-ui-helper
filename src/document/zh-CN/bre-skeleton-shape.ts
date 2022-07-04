import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'shape',
    description: '图形骨架的形状',
    type: 'string',
    value: 'square / circle',
    default: 'square'
  },
  {
    name: 'size',
    description: '图形骨架的大小',
    type: 'string',
    value: 'small / medium / large',
    default: 'medium'
  }
]

export const document: ElDocument = { attributes }

export default document
