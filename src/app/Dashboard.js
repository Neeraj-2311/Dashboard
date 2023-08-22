import React, { useEffect } from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';
import { useCallback, useState } from 'react';
import { BiChevronDown, BiChevronRight } from 'react-icons/bi';
import { HiOutlineLockOpen, HiOutlineLockClosed, HiOutlineOfficeBuilding } from 'react-icons/hi';

export const Dashboard = ({setIsLoading}) => {

    const [graphWidth, setGraphWidth] = useState(1038);
    const [dummyData, setDummyData] = useState(null);
    const [close, setClose] = useState(0);
    const [open, setOpen] = useState(0);
    const [volume, setVolume] = useState(0);

    const graphRef = useCallback((node) => {
        if(!node) return;
        const resizeObserver = new ResizeObserver(() => {
            setGraphWidth(node.clientWidth);
        });
        resizeObserver.observe(node);
    });

    const percentValue = (amt) => {
        let sum = 0;
        for (let index = 0; index < dummyData.length; index++) {
            sum += dummyData[index].volume;
        }
        return `${Math.round((amt/sum) * 100)}%`;
    }

    const handleExpand = (e) => {
        e.preventDefault();
        alert('This functionality is not built yet!');
        return;
    }

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
    //  this api provides daily prices metadata (open, high, volume, close) of IBM 
        fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=demo', { signal })
          .then(response => response.json())
          .then(data => {
            const timeSeriesData = data['Time Series (Daily)'];
            const parsedData = Object.keys(timeSeriesData).map(date => ({
              date,
              open: parseFloat(timeSeriesData[date]['1. open']),
              close: parseFloat(timeSeriesData[date]['4. close']),
              volume: parseInt(timeSeriesData[date]['5. volume']),
            }));
      
            const trimmedData = parsedData.slice(0, 5);
            setDummyData(trimmedData);

            const highestVolume = Math.max(...parsedData.map(entry => entry.volume));
            const highestOpen = Math.max(...parsedData.map(entry => entry.open));
            const highestClose = Math.max(...parsedData.map(entry => entry.close));
            setClose(highestClose);
            setOpen(highestOpen);
            setVolume(highestVolume);
            setIsLoading(false);
          })
          .catch(error => {
            console.log('Error fetching data:', error);
          });
      
        return () => {
          controller.abort();
        };
      }, []);
      

    return (
        <div className="sm:p-4">
            <div className="xl:grid xl:grid-cols-4 flex flex-row flex-wrap justify-center gap-6 mb-4">
                <div className="flex flex-col justify-end min-w-[210px] h-[120px] p-6 relative rounded-3xl bg-[#DDEFE0]">
                    <p className="text-[14px] font-lato">Maximum Volume</p>
                    <p className="font-bold text-[24px] font-sans">{volume}</p>
                    <BsCurrencyDollar className='absolute top-6 right-6 text-3xl'/>
                </div>
                <div className="flex flex-col relative justify-end min-w-[210px] h-[120px] p-6 rounded-3xl bg-[#F4ECDD]">
                    <p className="text-[14px] font-lato">Maximum Open</p>
                    <p className="font-bold text-[24px] font-sans">{open}</p>
                    <HiOutlineLockOpen className='absolute top-6 right-6 text-3xl'/>
                </div>
                <div className="flex flex-col relative justify-end min-w-[210px] h-[120px] p-6 rounded-3xl bg-[#EFDADA]">
                    <p className="text-[14px] font-lato">Maximum Close</p>
                    <p className="font-bold text-[24px] font-sans">{close}</p>
                    <HiOutlineLockClosed className='absolute top-6 right-6 text-3xl'/>
                </div>
                <div className="flex flex-col relative justify-end min-w-[210px] h-[120px] p-6 rounded-3xl bg-[#DEE0EF]">
                    <p className="text-[14px] font-lato">Organization</p>
                    <p className="font-bold text-[24px] font-sans">IBM</p>
                    <HiOutlineOfficeBuilding className='absolute top-6 right-6 text-3xl'/>
                </div>
            </div>
            <div ref={graphRef} className="flex flex-col relative items-center p-7 my-10 justify-center rounded-3xl h-[380px] bg-white">
                <div className='z-10 flex top-7 left-12 flex-col items-left absolute'>
                    <p className='text-lg font-semibold'>Statistics</p>
                    <p className='text-sm flex flex-row items-center gap-1 text-[darkgray] cursor-pointer' onClick={handleExpand}>Aug - Aug 2023 <BiChevronDown className='text-xl'/></p>
                </div>
                <div className='absolute h-full top-[30px] left-[36px]'>
                    <LineChart
                        width={graphWidth - 86}
                        height={330}
                        data={dummyData}
                        >
                        <CartesianGrid/>
                        <XAxis dataKey="date" tick={true}/>
                        <YAxis/>
                        <Tooltip />
                        <Legend verticalAlign='top' iconType='circle' iconSize={10} align='right' height={80}/>
                        <Line type='monotone' dataKey="open" stroke="#8884d8" strokeWidth={2} activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="close" stroke="#82ca9d" strokeWidth={2} />
                        <Line type="monotone" dataKey="high" stroke="#005154" strokeWidth={2} />
                    </LineChart>
                </div>
            </div>
            <div className="grid md:grid-cols-2 gap-10 mb-4">
                <div className="flex relative flex-row flex-wrap space-y-4 items-center space-x-4 p-10 pt-14 max-[400px]:pt-20 justify-evenly rounded-3xl bg-white">
                    <div className='flex top-7 px-10 flex-row max-[400px]:flex-col  items-center justify-between w-full absolute'>
                        <p className='text-lg font-semibold'>Volume</p>
                        <p className='text-sm flex flex-row items-center gap-1 text-[darkgray] cursor-pointer' onClick={handleExpand}>Aug - Aug 2023 <BiChevronDown className='text-xl'/></p>
                    </div>
                    <div className='flex justify-center'>
                        <PieChart width={160} height={160}>
                            <Pie
                                data={dummyData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="volume"
                                >
                                {dummyData?.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                                ))}
                            </Pie>
                        </PieChart>
                    </div>
                    <div className='flex flex-col items-center'>
                        {dummyData?.map((entry, index) => (
                            <div key={'data-'+index} className='flex flex-col justify-left pl-8 relative'>
                                <span className={'w-2.5 h-2.5 rounded-xl top-1.5 left-2 absolute'} style={{backgroundColor: colors[index]}} />
                                <p className='text-sm font-bold'>{entry.date}</p>
                                <p className='text-xs mb-4'>{percentValue(entry.volume)}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex items-center flex-col space-y-4 p-10 max-[400px]:pt-20 h-[fit-content] relative pt-16 rounded-3xl bg-white">
                    <div className='flex top-7 px-10 flex-row max-[400px]:flex-col items-center justify-between w-full absolute'>
                        <p className='text-lg font-semibold'>{"Today's schedule"}</p>
                        <p className='text-sm flex flex-row items-center gap-1 text-[darkgray] cursor-pointer ' onClick={handleExpand}>See all <BiChevronRight className='text-xl'/></p>
                    </div>
                    <div className='flex flex-col w-full'>
                        <div className='flex flex-col pl-3 py-1 border-l-[4px] border-l-blue-500 items-left space-y-0.5'>
                            <p className='text-sm font-semibold'>Meeting with suppliers from Kuta Bali</p>
                            <p className='text-xs'>14.00-15.00</p>
                            <p className='text-xs'>at Sunset Road, Kuta, Bali</p>
                        </div>
                    </div>
                    <div className='flex flex-col w-full py-1 border-l-[4px] border-l-orange-500'>
                        <div className='flex flex-col pl-3 items-left space-y-0.5'>
                            <p className='text-sm font-semibold'>Check operation at Giga Factory 1</p>
                            <p className='text-xs'>18.00-20.00</p>
                            <p className='text-xs'>at Central Jakarta</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#005154'];