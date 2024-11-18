
import s from "./ArticleList.module.css"

const ArticleList = ({items}) => {
  return (
    <div>
        <ul>
          {items.map(({objectId, url, title}) => (
            <li key={objectId}>
              <a href={url} target='_blank' rel='noreferrer noopener'>
                {title}
              </a>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default ArticleList