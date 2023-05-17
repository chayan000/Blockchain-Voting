import React from 'react';

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            states: [],
            districts: [],
            constituencies: [],
            selectedState: '--Choose State--',
            selectedDistrict: '--Choose District--',
            selectedConstituency: '-- Choose Constituency--'
        };
        this.changeState = this.changeState.bind(this);
        this.changeDistrict = this.changeDistrict.bind(this);
        this.changeConstituency = this.changeConstituency.bind(this);
        
    }

    componentDidMount() {
        this.setState({
            states: [
                { name: 'Germany', districts: [{ name: 'A', constituencies: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn'] }] },
                { name: 'State Name ', districts: [{ name: 'A', constituencies: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn'] }] },
                { name: 'Andhra Pradesh', districts: [{ name: 'A', constituencies: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn'] }] },
                { name: 'Arunachal Pradesh', districts: [{ name: 'A', constituencies: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn'] }] },
                { name: 'Assam', districts: [{ name: 'A', constituencies: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn'] }] },
                { name: 'Bihar ', districts: [{ name: 'A', constituencies: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn'] }] },
                { name: 'Chhattisgarh', districts: [{ name: 'A', constituencies: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn'] }] },
                { name: 'Goa', districts: [{ name: 'A', constituencies: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn'] }] },
                { name: 'Gujarat', districts: [{ name: 'A', constituencies: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn'] }] },
                { name: 'Haryana', districts: [{ name: 'A', constituencies: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn'] }] },
                { name: 'Himachal Pradesh', districts: [{ name: 'A', constituencies: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn'] }] },
                { name: 'Jharkhand', districts: [{ name: 'A', constituencies: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn'] }] },
                { name: 'Karnataka', districts: [{ name: 'A', constituencies: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn'] }] },
                { name: 'Kerala', districts: [{ name: 'A', constituencies: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn'] }] },
                { name: 'Madhya Pradesh', districts: [{ name: 'A', constituencies: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn'] }] },
                { name: 'Maharashtra', districts: [{ name: 'A', constituencies: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn'] }] },
                { name: 'Manipur', districts: [{ name: 'A', constituencies: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn'] }] },
                { name: 'Meghalaya', districts: [{ name: 'A', constituencies: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn'] }] },
                { name: 'Mizoram', districts: [{ name: 'A', constituencies: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn'] }] },
                { name: 'Nagaland', districts: [{ name: 'A', constituencies: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn'] }] },
                { name: 'Odisha', districts: [{ name: 'A', constituencies: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn'] }] },
                { name: 'Punjab', districts: [{ name: 'A', constituencies: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn'] }] },
                { name: 'Rajasthan', districts: [{ name: 'A', constituencies: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn'] }] },
                { name: 'Sikkim', districts: [{ name: 'A', constituencies: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn'] }] },
                { name: 'Tamil Nadu', districts: [{ name: 'A', constituencies: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn'] }] },
                { name: 'Telangana ', districts: [{ name: 'A', constituencies: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn'] }] },
                { name: 'Tripura', districts: [{ name: 'A', constituencies: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn'] }] },
                { name: 'Uttarakhand', districts: [{ name: 'A', constituencies: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn'] }] },
                { name: 'Uttar Pradesh ', districts: [{ name: 'A', constituencies: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn'] }] },
                {
                    name: 'West Bengal', districts: [{ name: 'Alipurduar', constituencies: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn'] },
                    { name: 'Bankura', constituencies: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn'] },
                    { name: 'Birbhum', constituencies: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn'] },
                    { name: 'Cooch Behar', constituencies: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn'] },
                    { name: 'Dakshin Dinajpur', constituencies: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn'] },
                    { name: 'Darjeeling', constituencies: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn'] },
                    { name: 'Hooghly', constituencies: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn'] },
                    { name: 'Howrah', constituencies: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn'] },
                    { name: 'Jalpaiguri', constituencies: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn'] },
                    { name: 'Jhargram', constituencies: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn'] },
                    { name: 'Kalimpong', constituencies: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn'] },
                    {
                        name: 'Kolkata', constituencies: ['Bhabanipur',
                            'Rashbehari',
                            'Ballygunge',
                            'Chowranghee',
                            'Entally',
                            'Beleghata',
                            'Jorasanko',
                            'Shyampukur',
                            'Maniktala',
                            'Kashipur Belgachhia']
                    },
                    { name: 'Malda', constituencies: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn'] },
                    { name: 'Murshidabad', constituencies: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn'] },
                    { name: 'Nadia', constituencies: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn'] },
                    { name: 'North 24 Parganas', constituencies: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn'] },
                    { name: 'Paschim Bardhaman', constituencies: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn'] },
                    { name: 'Paschim Medinipur', constituencies: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn'] },
                    { name: 'Purba Bardhaman', constituencies: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn'] },
                    { name: 'Purba Medinipur', constituencies: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn'] },
                    { name: 'Purulia', constituencies: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn'] },
                    { name: 'South 24 Parganas', constituencies: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn'] },
                    { name: 'Uttar Dinajpur', constituencies: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn'] },
                    ]
                },

            ]
        });
    }

    changeState(event) {
        this.setState({ selectedState: event.target.value });
        this.setState({ districts: this.state.states.find(cntry => cntry.name === event.target.value).districts });
    }

    changeDistrict(event) {
        this.setState({ selectedDistrict: event.target.value });
        const stats = this.state.states.find(cntry => cntry.name === this.state.selectedState).districts;
        this.setState({ constituencies: stats.find(stat => stat.name === event.target.value).constituencies });
    }
    changeConstituency(event){
        this.setState({selectedConstituency: event.target.value});
        const data={state: this.state.selectedState,district: this.state.selectedDistrict, constituency: this.state.selectedConstituency};
        
    }
    
    
    render() {
        return (
            <div>
                <div>
                    <select className='dropdown' placeholder="State" value={this.state.selectedState} onChange={this.changeState}>
                        <option>--Choose State--</option>
                        {this.state.states.map((e, key) => {
                            return <option key={key}>{e.name}</option>;
                        })}
                    </select>
                </div>

                <div>
                    
                    <select className='dropdown' placeholder="District" value={this.state.selectedDistrict} onChange={this.changeDistrict}>
                        <option>--Choose District--</option>
                        {this.state.districts.map((e, key) => {
                            return <option key={key}>{e.name}</option>;
                        })}
                    </select>
                </div>

                <div>
                    
                    <select className='dropdown' placeholder="Constituency" onChange={this.changeConstituency} >
                        <option>--Choose Constituency--</option>
                        {this.state.constituencies.map((e, key) => {
                            return <option key={key}>{e}</option>;
                        })}
                    </select>
                </div>
                <button onClick={this.changeConstituency}>ADD</button>
            </div>
        )
    }
}

export default Dropdown;