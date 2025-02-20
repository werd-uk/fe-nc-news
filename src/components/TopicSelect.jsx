import { Link, useParams } from "react-router";

export function TopicSelector({ topicList = [] }) {
    const { topic_name } = useParams();
    return topicList.length > 0
        ? topicList.map((topic) => {
              return (
                  <Link key={`link-${topic.slug}`} className={`default-button topic-button ${topic.slug === topic_name ? "current-topic-button" : null}`} to={`/topics/${topic.slug}`}>
                      {topic.slug}
                  </Link>
              );
          })
        : "No topics";
}
