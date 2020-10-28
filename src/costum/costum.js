import React, { useState, useRef } from "react";
import classes from "./costum.module.css";

const Custom = () => {
    //test
    const ref = useRef();
    const nowClicked = useRef();
    const [head, setHead] = useState([
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Age",
            dataIndex: "age",
            key: "age",
        },
        {
            title: "Address",
            dataIndex: "address",
            key: "address",
        },
    ]);

    const [data, setData] = useState([
        {
            key: "1",
            name: "Mike",
            age: 32,
            address: "10 Downing Street",
            isDrag: false,
        },
        {
            key: "2",
            name: "John",
            age: 42,
            address: "10 Downing Street",
            isDrag: false,
        },
        {
            key: "3",
            name: "ali",
            age: 42,
            address: "10 Downing Street",
            isDrag: false,
        },
        {
            key: "4",
            name: "mamad",
            age: 42,
            address: "10 Downing Street",
            isDrag: false,
        },
    ]);

    const dargHandler = (e, keyOfRow, status) => {
        console.log(keyOfRow);
        const copyOfdata = [...data];
        copyOfdata.forEach((item, index) => {
            Object.keys(item).forEach((itemInner, index) => {
                if (item.key === keyOfRow) {
                    if (status === "start") {
                        item.isDrag = true;
                    } else if (status === "end") {
                        item.isDrag = false;
                    }
                }
            });
        });
        setData(copyOfdata);
    };

    const dragOverTable = (e) => {
        e.preventDefault();
        const table = ref.current;
        const now = nowClicked.current;
        const dragableElements = table.getElementsByTagName("tr");
        console.log("tr tag", table.getElementsByTagName("tr"));
        console.log("slam", table, e.clientY, now);

        const near = dragableElements.reduce(
            (closest, child) => {
                const box = child.getBoundingClientRect();
                const offset = e.clientY - box.top - box.height / 2;
                if (offset < 0 && offset > closest.offset) {
                    return { offset: offset, element: child };
                } else {
                    return closest;
                }
            },
            { offset: Number.NEGATIVE_INFINITY }
        ).element;
        console.log("near", near);
    };

    return (
        <table
            style={{ margin: "200px" }}
            ref={ref}
            onDragOver={(e) => dragOverTable(e)}
            className={classes.custom}
        >
            <thead>
                <tr>
                    {head.map((item, index) => {
                        return <th key={index}>{item.title}</th>;
                    })}
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => {
                    return (
                        <tr
                            key={item.key}
                            draggable="true"
                            onDragStart={(e) => dargHandler(e, item.key, "start")}
                            onDragEnd={(e) => dargHandler(e, item.key, "end")}
                            style={{ color: item.isDrag && "red" }}
                            ref={nowClicked}
                        >
                            {Object.keys(item).map((itemInner, index) => {
                                if (itemInner !== "key") {
                                    return <td key={index}>{item[itemInner]}</td>;
                                }
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default Custom;
