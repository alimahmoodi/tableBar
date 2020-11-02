import React from "react";
import Table, { AutoResizer } from "react-base-table";
import "react-base-table/styles.css";

const columns = [
    {
        key: "name",
        title: "Name",
        dataKey: "name1",
        width: 300,
        resizable: true,
        maxWidth: 200,
        align: "center",
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
        name1:
            "e the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with d ",
        score1: "12",
        id: 1,
    },
    {
        name1: "hadi",
        score1: "15",
        id: 2,
    },
];
const TableTest = () => {
    return (
        <div style={{ width: "100%" }}>
            <Table
                height={200}
                width={500}
                estimatedRowHeight={({ rowData, rowIndex }) => {
                    console.log(rowData, rowIndex);
                    return true;
                }}
                data={data}
                columns={columns}
            />
        </div>
    );
};

export default TableTest;
