import { Button } from "@/components/ui/button";



const ButtonPage = () => {
  return (
    <div className="p-4 space-y-4 flex flex-col max-w-[200px]">
      
        <Button>
          Default
        </Button>
        <Button variant="primary">
          Primary
        </Button>
        <Button variant="primaryOutline">
          Primary Outline
        </Button>

        <Button variant="secondary">
          Secondary
        </Button>
        <Button variant="secondaryOutline">
          Secondary Outline
        </Button>

        <Button variant="danger">
          Secondary
        </Button>
        <Button variant="dangerOutline">
          Secondary Outline
        </Button>

        <Button variant="super">
          Secondary
        </Button>
        <Button variant="superOutline">
          Secondary Outline
        </Button>

        <Button variant="ghost">
          ghost
        </Button>
        

        <Button variant="sidebar">
          sidebar
        </Button>
        <Button variant="sidebarOutline">
          Secondary Outline
        </Button>

        
    </div>
  );
};

export default ButtonPage;
