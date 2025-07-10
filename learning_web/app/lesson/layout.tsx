import ChatBubble from "@/components/ChatBubble";

type Props = {
    children: React.ReactNode;
};

const LessonLayout = ({ children }: Props) => {
    return ( 
        <>
         <div className="flex flex-col h-full">
            <div className="flex flex-col h-full w-full">
                {children}
            </div>
        </div>
        <ChatBubble />
        </>
       
    );
};
 
export default LessonLayout;