"use client";
import { CodeBlock } from "react-code-block";
import { themes } from "prism-react-renderer";

const BlockCode = () => {
  const code = `
  console.log("Hello");
  
const services = [
   'Frontend Web',
]
  
if(have_a_project) 
    navigate ('/contact');
      `;
  return (
    <div className="w-full">
      <CodeBlock
        code={code}
        language={"javascript"}
        theme={themes.oceanicNext}
        lines={[4]}
      >
        <CodeBlock.Code className="bg-[#1f1f22] p-6 shadow-lg">
          {({ isLineHighlighted }) => (
            <div className={`table-row`}>
              <CodeBlock.LineNumber className="table-cell select-none pr-4 text-right text-sm text-gray-500" />
              <CodeBlock.LineContent className="table-cell">
                <CodeBlock.Token />
              </CodeBlock.LineContent>
            </div>
          )}
        </CodeBlock.Code>
      </CodeBlock>
    </div>
  );
};

export default BlockCode;
