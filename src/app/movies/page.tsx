"use client";

import {
  DateField,
  DeleteButton,
  List,
  ShowButton,
  useTable,
} from "@refinedev/antd";
import { type BaseRecord } from "@refinedev/core";
import { Space, Table, Tag } from "antd";

interface DataType {
  key: string;
  title: string;
  description: number;
  rating: string;
  genre: string[];
  releaseDate: string;
}

interface Content {
  title: string;
  shortDescription: string;
  genre: string[];
  rating: string;
  releaseDate: string;
}

interface ITable extends BaseRecord {
  dataSource: {
    content: Content[];
  };
}

export default function MoviesList() {
  const { tableProps } = useTable({
    resource: "movies",
  });

  const { dataSource } = tableProps;

  return (
    <List>
      <Table dataSource={dataSource?.content} rowKey="id">
        <Table.Column dataIndex="id" title={"ID"} />
        <Table.Column dataIndex="title" title={"Title"} />
        <Table.Column dataIndex="shortDescription" title={"Description"} />
        <Table.Column
          dataIndex="genres"
          title={"Genres"}
          render={(_, record: BaseRecord) => (
            <>
              {record.genres.map((g: any) => {
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
                  <Tag color={color} key={g}>
                    {g.toUpperCase()}
                  </Tag>
                );
              })}
            </>
          )}
        />

        <Table.Column dataIndex="rating" title={"Rating"} />
        <Table.Column
          width={150}
          dataIndex={["releaseDate"]}
          title={"Release Date"}
          render={(value: any) => <DateField value={value} />}
        />
        <Table.Column
          title={"Actions"}
          dataIndex="actions"
          render={(_, record: BaseRecord) => (
            <Space>
              <ShowButton hideText size="small" recordItemId={record.id} />
              <DeleteButton hideText size="small" recordItemId={record.id} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
}
