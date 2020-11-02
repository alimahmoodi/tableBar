import React, { useState, useRef } from "react";
import { sortableContainer, sortableElement } from "react-sortable-hoc";
import arrayMove from "array-move";

const SortableContainer = sortableContainer(({ children }) => {
    return <tbody>{children}</tbody>;
});

const SortableItem = sortableElement(({ value }) => (
    <tr key={value.key}>
        {Object.keys(value).map((itemInner, index) => {
            if (itemInner !== "key") {
                return <td key={index}>{value[itemInner]}</td>;
            }
        })}
    </tr>
));

const Custom = () => {
    //test

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

    const onSortEnd = ({ oldIndex, newIndex }) => {
        setData((data) => arrayMove(data, oldIndex, newIndex));
    };

    return (
        <table style={{ margin: "200px" }}>
            <thead>
                <tr>
                    {head.map((item, index) => {
                        return <th key={index}>{item.title}</th>;
                    })}
                </tr>
            </thead>
            <SortableContainer onSortEnd={onSortEnd}>
                {data.map((value, index) => (
                    <SortableItem key={index} index={index} value={value} />
                ))}
            </SortableContainer>
        </table>
    );
};

export default Custom;
