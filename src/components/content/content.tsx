import { FC, ReactNode } from "react"
import { Container } from "react-bootstrap"

type ContentType = {
    children: ReactNode
}

export const Content: FC<ContentType> = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    )
}