/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/7uEafCBdbG1
 */
import { Button } from "@/components/ui/button";

interface ButtonAddProps {
  onClick: () => void; // Definindo o tipo da prop onClick como uma função sem parâmetros e sem retorno
}
export function ButtonRemove({ onClick }: ButtonAddProps) {
  return (
    <div className="flex items-center space-x-4">
      <Button variant="outline" onClick={onClick} type="button">
        <TrashIcon className="h-3 w-3" />
      </Button>
    </div>
  );
}
// @ts-ignore
function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

// @ts-ignore
function TrashIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}
