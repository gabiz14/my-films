import React, {Component} from 'react';

const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Genre</th>
            </tr>
        </thead>
    );
}

const TableBody = props => { 
    const rows = props.filmsData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.genre}</td>
                <td><button onClick={() => props.removeFilm(index)}>Delete</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}


class Table extends Component {
    render() {
        const { filmsData, removeFilm } = this.props;

        return (
            <table>
                <TableHeader />
                <TableBody 
                    filmsData={filmsData}
                    removeFilm={removeFilm} 
                />
            </table>
        );
    }
}



export default Table;