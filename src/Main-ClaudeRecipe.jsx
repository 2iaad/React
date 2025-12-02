import { MarkdownHooks } from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function ClaudeRecipe(props) {

    const html = <MarkdownHooks remarkPlugins={[remarkGfm]}>{props.Recipe}</MarkdownHooks>;

    return (
        <>
            <section>
                {html}
            </section>
        </>
    )
}