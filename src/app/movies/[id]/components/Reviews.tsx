import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const Reviews = () => {
  return (
    <div className="bg-white pb-10 pt-4">
      <div className="container">
        <div className="font-semibold text-red-accent">OVERVIEW</div>
        <div className="mt-6 grid grid-cols-2 gap-x-8">
          {Array.from({ length: 2 }).map((_, index) => (
            <Card key={index} className="rounded-2xl border-none bg-[#F9F9F9] text-black">
              <CardHeader className="flex-row items-start justify-between space-y-0">
                <div className="flex items-center gap-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-sm font-bold">SWITCH.</div>
                    <div className="text-xs text-[#666666]">December 18, 2020</div>
                  </div>
                </div>
                <div className="flex gap-x-1 rounded-md bg-[#C4C4C447] p-2 text-4xl">
                  <svg
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mt-1.5"
                  >
                    <path
                      d="M6.58155 1.13274C6.92863 0.326777 8.07137 0.326779 8.41845 1.13274L9.56338 3.79138C9.70816 4.12756 10.025 4.35778 10.3895 4.39158L13.2718 4.65891C14.1456 4.73995 14.4987 5.82676 13.8394 6.40591L11.6647 8.31637C11.3897 8.55794 11.2687 8.93044 11.3492 9.28751L11.9856 12.1114C12.1786 12.9674 11.2541 13.6391 10.4995 13.1911L8.01056 11.7132C7.69584 11.5263 7.30416 11.5263 6.98944 11.7132L4.50046 13.1911C3.74593 13.6391 2.82144 12.9674 3.01437 12.1114L3.65082 9.28751C3.73129 8.93044 3.61026 8.55794 3.33527 8.31637L1.16056 6.40591C0.501297 5.82676 0.854425 4.73995 1.7282 4.65891L4.61051 4.39158C4.97497 4.35778 5.29184 4.12756 5.43662 3.79138L6.58155 1.13274Z"
                      fill="#FFB802"
                    />
                  </svg>

                  <span className="font-semibold">7.0</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm italic">
                  It isn&apos;t as easy as saying &apos;Wonder Woman 1984&apos; is a good or bad
                  movie. The pieces are there, and there are moments I adore, but it does come
                  across as a bit of a mess, even though the action sequences are breathtaking. If
                  you&apos;re a fan of the original film, you&apos;ll be more willing to take the
                  ride, but for those more indifferent, it may be a bit of a blander sit. If you can
                  and are planning to watch it, the theatrical experience is the way to go - there
                  is nothing like seeing these stunning sets, fun action scenes and hearing
                  Zimmer&apos;s jaw-dropping score like on the big screen. - Chris dos Santos...
                  read the rest.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
