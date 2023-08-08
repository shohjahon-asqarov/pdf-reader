import React from 'react'

import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

const Reader = () => {
    const [url, setUrl] = React.useState('');

    // Handle the `onChange` event of the `file` input
    const onChange = (e) => {
        const files = e.target.files;
        files.length > 0 && setUrl(URL.createObjectURL(files[0]));
    };

    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <div>
            <input type="file" accept=".pdf" onChange={onChange} />

            <div style={{ height: '750px' }}>
                {url ? (
                    <div
                        style={{
                            border: '1px solid rgba(0, 0, 0, 0.3)',
                            height: '100%',
                        }}
                    >

                        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                            <div
                                style={{
                                    height: '750px',
                                    maxWidth: '1100px',
                                    marginLeft: 'auto',
                                    marginRight: 'auto',
                                }}
                            >
                                <Viewer
                                    fileUrl={url}
                                    plugins={[defaultLayoutPluginInstance]}
                                />
                            </div>
                        </Worker>
                    </div>
                ) : (
                    <div
                        style={{
                            alignItems: 'center',
                            border: '2px dashed rgba(0, 0, 0, .3)',
                            display: 'flex',
                            fontSize: '2rem',
                            height: '100%',
                            justifyContent: 'center',
                            width: '100%',
                        }}
                    >
                        Preview area
                    </div>
                )}
            </div>
        </div>
    );
}

export default Reader