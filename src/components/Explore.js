import React from 'react';
import { Box, Image, Button, Input, Heading, InputGroup, InputLeftElement, UnorderedList, ListItem, Text } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { Link } from 'react-scroll';

export const Explore = () => {

    const [category, setCategory] = React.useState([]);
    const [color, setColor] = React.useState("#7A8B94");
    const [i, setIndex] = React.useState(-1);



    React.useEffect(() => {
        (async () => {
            try {
                let res = await fetch('https://unacadmey-test-app.herokuapp.com/courses');
                res = await res.json();
                setCategory(res.course);
                console.log(category);
            } catch (error) {
                console.log(error);
            }
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <>
            <Box position="sticky" top="0px" left="0px" width="100%" height="72px" backgroundColor="#FFFFFF" boxShadow="inset 0px -1px 0px rgba(233, 238, 242, 0.4)" zIndex="2">
                <Box width="1200px" margin="auto" padding="15px" display="flex" justifyContent="space-between" alignItems="center" height="100%" marginInline="auto" backgroundColor="transparent">
                    <Image src="https://static.uacdn.net/production/_next/static/images/logo.svg?q=75&w=256"></Image>
                    <Button colorScheme="green" fontSize="sm" fontWeight="semibold">Login</Button>
                </Box>
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center" width="100%" height="200px" position="relative" backgroundSize="100%" backgroundRepeat="no-repeat" backgroundImage="https://static.uacdn.net/production/_next/static/images/goal/managegoal-test-prep-light-new.svg">
                <Heading>Choose Your Goal</Heading>
                <InputGroup position="absolute" background="white !important" bottom="-20px" width="550px" >
                    <InputLeftElement
                        pointerEvents='none'
                        children={<SearchIcon color='gray.600' />}
                    />
                    <Input placeholder="Search for your goal" />
                </InputGroup>
            </Box>
            <Box width="1200px" margin="155px auto 0 auto" display="grid" gridTemplateColumns="repeat(24,1fr)" gap="16px" top="-56px" position="relative">
                <UnorderedList gridColumn="span 6" position="sticky" top="100px" height="400px" paddingInlineStart="0" overflowY="auto" paddingBottom="350px">
                    {category.map((el, index) => {
                        return (<ListItem paddingBottom="14px" listStyleType="none" cursor="pointer" key={index}><Link activeClass="active" onSetActive={() => { setIndex(index) }} to={el.category} spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}><Text color={i === index ? "black" : "#7A8B94"} fontSize="14px">{el.category}</Text></Link></ListItem>)
                    })}
                </UnorderedList>
                <Box gridColumn="span 18" paddingBottom="350px" z-index="0">
                    {
                        category.map((el, index) => {
                            return (
                                <Box key={index} id={el.category} marginBottom="48px">
                                    <Text fontWeight="normal" fontSize="14px" lineHeight="150%" margin="0px">{el.category}</Text>
                                    <Box display="grid" gridTemplateColumns="repeat(18,32px)" gridColumnGap="16px">
                                        {
                                            el.courses.map((e, ind) => {
                                                return (
                                                    <Box key={ind} boxShadow="0px 16px 32px 0px rgba(233, 238, 242, 0.4)" gridColumn="span 6" position="relative" padding="24px" background="#FFFFFF" marginTop="16px" borderRadius="8px" display="block" alignItems="center" cursor="pointer" transition="box-shadow 0.2s ease-in-out">
                                                        <Box display="flex" justifyContent="space-between" alignItems="flex-start" marginRight="0px" marginBottom="20px">
                                                            <Box display="inline-block" boxSizing="border-box" overflow="hidden" width="initial" height="initial" background="none" opacity="1" border="0" margin="0" padding="0" position="relative" maxWidth="100%" >
                                                                <Box display="block" boxSizing="border-box" width="initial" height="initial" background="none" opacity="1" border="0" margin="0" padding="0" maxWidth="100%">
                                                                    <Image display="block" width="50px" height="initial" background="none" opacity="1" border="0" margin="0" padding="0" src={e.logo_url} />
                                                                </Box>
                                                                {/* <Image position="absolute" top="0" left="0" bottom="0" right="0" boxSizing="border-box" padding="0" border="none" margin="auto" display="block" width="0" height="0" minWidth="100%" maxWidth="100%" minHeight="100%" maxHeight="100%" src={e.logo_url} /> */}
                                                            </Box>
                                                        </Box>
                                                        <Box><Text fontWeight="600" fontSize="14px" lineHeight="150%" margin="0px">{e.title}</Text></Box>
                                                    </Box>
                                                )
                                            })
                                        }
                                    </Box>
                                </Box>
                            )
                        })
                    }
                </Box>
            </Box>

        </>
    )
}
