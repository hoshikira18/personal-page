'use client'
import { CodeBlock } from 'react-code-block';
import { themes } from 'prism-react-renderer';

const BlockCode = () => {

    const code = `
  console.log("Hello");
  
  const services = [
    'Frontend Web',
  ]
  
  if(have_a_project) navigate ('/contact');
      `
    return (
        <div>
            <CodeBlock code={code} language={"javascript"} theme={themes.nightOwl}>
                <CodeBlock.Code className="bg-gray-900 p-6 rounded-xl shadow-lg">
                    <CodeBlock.LineContent>
                        <CodeBlock.Token />
                    </CodeBlock.LineContent>
                </CodeBlock.Code>
            </CodeBlock>
        </div>
    )
}

export default BlockCode;