import React from "react";
import BaseTable, { Column } from "react-base-table";
import "react-base-table/styles.css";

const columns = [
    {
        key: "name",
        title: "Name",
        dataKey: "name1",
        width: 150,
    },
    {
        key: "score",
        title: "Score",
        dataKey: "score1",
        width: 60,
    },
];

const data = [
    {
        name1: "ali",
        score1: "12",
        id: 1,
    },
    {
        name1: "hadi",
        score1: "15",
        id: 2,
    },
];
const Table = () => {
    return <BaseTable height={400} width={400} data={data} columns={columns} />;
};

export default Table;
