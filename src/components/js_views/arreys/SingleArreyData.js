import React from "react";
import CodeBlock from "../../../generalComponents/codeBlock/CodeBlock";

export default function SingleArreyData({ item }) {
  return (
    <>
      <div id='arrey_codeBox' className='arrey_codeBox '>
        <div>
          <h4 className='singleArrey_titel'>{item.name}</h4>
          <p className='singleArrey_description'>{item.description}</p>
        </div>
        <div id='jsCodBlock' className='jsCodBlock'>
          <ul>
            <li>
              <p className='outputHeader'>Examples</p>
              <pre datatype='js'>
                {item.functions > 0 ? (
                  item.functions.map((item) => <p>{item}</p>)
                ) : (
                  <CodeBlock code={item.functions} leng={"javascript"} />
                )}
              </pre>
              <p className='outputHeader'>Output</p>
              <pre>{item.output}</pre>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
