import { TagProps } from '../../types'
import { TagContainer } from './styles'

const Tag = ({ children }: TagProps) => {
    return <TagContainer>{children}</TagContainer>
}

export default Tag
