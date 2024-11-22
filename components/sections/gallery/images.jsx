import GalleryContent from "@/components/templates/galeryContent";

export default function ImageGallery({ galeri }) {
  return (
    <GalleryContent h1Title={galeri.h2}>
      {galeri.categories.map((c, index) => (
        <div key={index}>
          <h3>{c.h3}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 justify-center ">
            {c.items.map((i, index) => (
              <div
                key={index}
                className="p-1 md:p-2 bg-white rounded-xl transition-transform duration-300 transform hover:scale-150 hover:z-50 hover:bg-purple-600"
              >
                <a href={`/assets/galeri/${i.src}`}>
                  <img
                    alt={i.title}
                    className="block h-full w-full rounded-lg object-cover object-center "
                    src={`/assets/galeri/${i.src}`}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </GalleryContent>
  );
}
