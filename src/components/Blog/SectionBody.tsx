import { sectionBodyType } from '../../types/BlogsTypes';
import ListOfBody from './ListOfBody';
import Paragraph from './Paragraph';

interface props {
    body: sectionBodyType;
}

export default function SectionBody({ body }: props) {
    const { paragraphs, list, order } = body;
    return (
        <>
            {order && order[0] == 'para' ? (
                <>
                    {paragraphs &&
                        paragraphs.map((paragraph: string, index: number) => 
                            <Paragraph key={index} paragraph={paragraph} />
                        )}
                    {list &&
                        list.map((list,index) => {
                            return <ListOfBody key={index} list={list} />;
                        })}
                </>
            ) : (
                <>
                    {list &&
                        list.map((list,index) => {
                            return <ListOfBody key={index} list={list} />;
                        })}
                    {paragraphs &&
                        paragraphs.map((paragraph: string, index: number) => {
                            return (
                         
                                    <Paragraph key={index} paragraph={paragraph} />
                 
                            );
                        })}
                </>
            )}
        </>
    );
}
