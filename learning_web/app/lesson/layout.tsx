import ChatBubbleWrapper from "@/components/ChatBubbleWrapper";

type Props = {
    children: React.ReactNode;
};

const LessonLayout = ({ children }: Props) => {
    return ( 
        <>
         <div className="flex flex-col h-full">
            <div className="main-content flex flex-col h-full w-full">
                {children}
            </div>
        </div>
        <ChatBubbleWrapper />
        </>
       
    );
};
 
export default LessonLayout;