import React from 'react'
import Pastel from './Pastel'

export default function PastelDemo() {
    return (
        <div>
            <Pastel label="Hello!" />
            <Pastel label="Goodbye!" />
            <Pastel label="Small size chip" size="small" />
            <Pastel label="Medium size chip" size="medium"/>
            <Pastel label="Default size"/>
        </div>
    )
}