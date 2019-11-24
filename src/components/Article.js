import React from "react";
import { List, Avatar, Icon } from "antd";
import image from "./background.svg";

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);
function Articles(props) {
  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 3
      }}
      dataSource={props.data}
      renderItem={(item) => (
        <List.Item
          key={item.title}
          actions={[
            <IconText
              type="star-o"
              text={Math.random() * 1000}
              key="list-vertical-star-o"
            />,
            <IconText
              type="like-o"
              text={Math.random() * 1000}
              key="list-vertical-like-o"
            />,
            <IconText
              type="message"
              text={Math.random() * 1000}
              key="list-vertical-message"
            />
          ]}
          extra={<img width={272} alt="logo" src={image} />}
        >
          <List.Item.Meta
            avatar={<Avatar src={item.avatar} />}
            title={<a href={`/articles/${item.id}`}>{item.title}</a>}
            description={item.description}
          />
          {item.content}
        </List.Item>
      )}
    />
  );
}
export default Articles;
