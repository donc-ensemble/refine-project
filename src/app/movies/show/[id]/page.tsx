"use client";

import { DateField, Show, TextField } from "@refinedev/antd";
import { useShow } from "@refinedev/core";
import { Tag, Typography } from "antd";

const { Title } = Typography;

export default function MoviesShow() {
  const { query: queryResult } = useShow({ resource: "movies" });
  const { data, isLoading } = queryResult;

  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>{"Title"}</Title>
      <TextField value={record?.title} />
      <Title level={5}>{"Description"}</Title>
      <TextField value={record?.description} />

      <Title level={5}>{"Genres"}</Title>
      {record?.genres.map((g: any) => {
        let color;
        if (g === "Thriller") {
          color = "volcano";
        } else if (g === "Horror") {
          color = "#5C3F8A";
        } else if (g === "Romance") {
          color = "pink";
        } else {
          color = "green";
        }
        return (
          <Tag color={color} key={g} style={{ marginBottom: 16 }}>
            {g.toUpperCase()}
          </Tag>
        );
      })}
      <Title level={5}>{"Rating"}</Title>
      <TextField value={record?.rating} />
      <Title level={5}>{"Release Date"}</Title>
      <DateField value={record?.releaseDate} />
    </Show>
  );
}
