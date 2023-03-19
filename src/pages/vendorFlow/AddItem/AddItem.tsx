import { Box, Center } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Webcam from 'react-webcam';
import { useLocalStorage } from 'usehooks-ts';
import { BackButton, MainButton } from '../../../components/basicStyled';
import { ScannedItem } from '../../../types';
import EnterItemInfo from './EnterItemInfo';
import { useNavigate } from "react-router-dom";

const AddItem = () => {
    const [scannedItems, setScannedItems] = useLocalStorage<ScannedItem[]>('scannedItems', [])
    const navigate = useNavigate()

    const [image, setImage] = useState<string>('')
    const webcamRef = React.useRef<Webcam>(null);
    const capture = React.useCallback(() => {
        const imageSrc = webcamRef.current?.getScreenshot();
        if (imageSrc) {
            setImage(imageSrc)
        }
    }, [webcamRef]);
    const videoConstraints = {
        height: window.innerHeight,
        width: window.innerWidth,
        facingMode: "user"
    };

    const [name, setName] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [originalPrice, setOriginalPrice] = useState<number|null>(null)
    const [reducedPrice, setReducedPrice] = useState<number|null>(null)

    const handleSubmit = () => {
        const item = {
            name: name,
            description: description,
            originalPrice: originalPrice,
            reducedPrice: reducedPrice,
            image: image,
            quantity: 1,
            key: scannedItems.length
        } as ScannedItem
        setScannedItems(prev => [...prev, item])
        navigate('/vendor/itemsummary')
    }

    return (
        <>
            <Link to={'/vendor/itemsummary'}>
                <BackButton />
            </Link>
            {
                image === '' ? (
                    <Box>
                        <Webcam
                            audio={false}
                            height={window.innerHeight}
                            screenshotFormat="image/jpeg"
                            videoConstraints={videoConstraints}
                            ref={webcamRef}
                        />
                        <Center>
                            <Box position={'fixed'} bottom={10} minW={'50vw'}>
                                <MainButton onClick={capture} w={'100%'} >Capture</MainButton>
                            </Box>
                        </Center>
                    </Box>
                ) : (
                    <EnterItemInfo image={image}
                            name={name}
                            setName={setName}
                            description={description}
                            setDescription={setDescription}
                            originalPrice={originalPrice}
                            setOriginalPrice={setOriginalPrice}
                            reducedPrice={reducedPrice}
                            setReducedPrice={setReducedPrice}
                            handleSubmit={handleSubmit}
                    />
                )
            }
        </>
    );
}

export default AddItem;